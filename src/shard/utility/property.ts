/**
 * [Function] 클래스 이름 병합 함수
 * @param classes 클래스 이름 목록
 * @returns 병합된 클래스 이름
 */
export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}
/**
 * [Function] 참조 객체 적용 함수
 * @param refs 참조 객체 목록
 * @returns 참조 객체 적용을 위한 함수
 */
export function composeRef(...refs: React.Ref<any>[]) {
  return (el: any) => {
    refs.forEach((ref: any) => {
      if (typeof ref === "function") ref(el);
      else if (ref) ref.current = el;
    });
  };
}
