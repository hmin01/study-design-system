/**
 * [Function] 클래스 이름 병합 함수
 * @param classes 클래스 이름 목록
 * @returns 병합된 클래스 이름
 */
export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}
