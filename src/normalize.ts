export function normalize(fileName: string): string {
  return fileName.split('\\').join('/')
}
