import path from "node:path";
import fs from "node:fs";

const PUBLIC_DIR = path.join(process.cwd(), "public");

/**
 * public/ 폴더에서 `basename`으로 시작하는 파일을 찾아 웹 경로(`/...`)로 반환합니다.
 * 여러 확장자를 우선순위대로 확인합니다. 없으면 null.
 *
 * 예) findPublicAsset("profile") → "/profile.png" 또는 "/profile.jpg" 또는 null
 */
export function findPublicAsset(
  basename: string,
  exts: readonly string[] = ["png", "jpg", "jpeg", "webp", "avif"],
): string | null {
  for (const ext of exts) {
    const rel = `${basename}.${ext}`;
    const abs = path.join(PUBLIC_DIR, rel);
    try {
      if (fs.statSync(abs).isFile()) return `/${rel}`;
    } catch {
      // not found, try next
    }
  }
  return null;
}
