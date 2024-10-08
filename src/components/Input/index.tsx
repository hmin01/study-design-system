// Color
import { neutral } from "@/shard/enum/color";
// Enum
import { PaddingVariants, IconSizeVariants } from "./Input.enum";
// Icon
import { Search, XCircle } from "lucide-react";
// Library
import { css as emotionCSS } from "@emotion/react";
// React hook
import { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
// Style
import { StyledIconContainer, StyledInput, StyledInputContainer } from "./Input.styles";
// Type
import type { ChangeEvent, KeyboardEvent } from "react";
import type { InputProps, SearchInputProps } from "./Input.types";
// Utiltiy
import { composeRef } from "@/shard/utility/property";
// Variants
import { inputSizeVariants } from "./Input.variants";

/************************************
 * 입력 컴포넌트
 ************************************/
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ allowClear, css, disabled, error, maxLength, onChange, size = "md", type, value, ...props }: InputProps, forwardRef) => {
    // 입력 요소 참조 객체
    const ref = useRef<HTMLInputElement>(null);
    // 내부 입력 값 상태
    const [inputValue, setInputValue] = useState<string | number | readonly string[] | undefined>("");
    // 입력 값 존재 유무
    const isExist: boolean = useMemo(() => Boolean(inputValue), [inputValue]);

    // 아이콘 크기
    const iconSize: number = useMemo(() => IconSizeVariants[size], [size]);
    // 아이콘 컨테이너 부가 스타일
    const addonIconContainerStyle = useMemo(
      () => ({
        zIndex: 1,
        "--wds-right": `${PaddingVariants[size] ?? 12}px`,
      }),
      [size]
    );
    // 패딩에 대한 스타일
    const paddingStyle = useMemo(
      () => ({
        paddingRight: PaddingVariants[size] + (isExist ? iconSize + PaddingVariants[size] / 2 : 0),
      }),
      [iconSize, isExist, size]
    );

    /** [Handler] 입력 값 변경 */
    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        // 내부 입력 값 변경 처리
        setInputValue(e.target.value);
        // Props로 전달받은 값 변경 핸들러 호출
        onChange?.(e);
      },
      [onChange]
    );
    /** [Handler] 입력 값 초기화 */
    const handleClear = useCallback(() => {
      // 내부 입력 값 초기화
      setInputValue("");
      // 입력 요소 포커즈
      ref.current?.focus();
    }, [ref]);

    /** 입력 값 동기화 */
    useEffect(() => {
      if (value) setInputValue(value);
    }, [value]);

    return allowClear ? (
      <StyledInputContainer>
        <StyledInput
          css={[inputSizeVariants[size], paddingStyle, css]}
          data-error={error}
          disabled={disabled}
          onChange={handleChange}
          ref={ref}
          size={maxLength}
          type={type}
          value={inputValue}
          {...props}
        />
        {isExist && (
          <StyledIconContainer css={[addonIconContainerStyle]}>
            <XCircle color="white" css={{ cursor: "pointer" }} fill={neutral.neutral600} onClick={handleClear} size={iconSize} />
          </StyledIconContainer>
        )}
      </StyledInputContainer>
    ) : (
      <StyledInput
        css={[inputSizeVariants[size], css]}
        data-error={error}
        disabled={disabled}
        onChange={handleChange}
        ref={composeRef(ref, forwardRef)}
        size={maxLength}
        type={type}
        value={inputValue}
        {...props}
      />
    );
  }
);
/************************************
 * 검색 컴포넌트
 ************************************/
export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ allowClear, css, onSearch, size = "md", ...props }: SearchInputProps, forwardRef) => {
    // 아이콘 크기
    const iconSize: number = useMemo(() => IconSizeVariants[size], [size]);

    // 아이콘 컨테이너 부가 스타일
    const addonIconContainerStyle = useMemo(
      () => ({
        zIndex: 1,
        "--wds-left": `${PaddingVariants[size] ?? 12}px`,
      }),
      [size]
    );
    // 입력 요소 패딩에 대한 스타일
    const paddingStyle = useMemo(
      () =>
        emotionCSS({
          paddingLeft: PaddingVariants[size] + iconSize + PaddingVariants[size] / 2,
        }),
      [iconSize, size]
    );

    /** [Handler] 키 다운 이벤트 처리 */
    const onKeyDown = useCallback(
      ({ code, target }: KeyboardEvent<HTMLInputElement>) => {
        if (code === "Enter") {
          onSearch?.((target as HTMLInputElement).value);
        }
      },
      [onSearch]
    );

    return (
      <StyledInputContainer>
        <StyledIconContainer css={[addonIconContainerStyle]}>
          <Search size={iconSize} />
        </StyledIconContainer>
        <Input allowClear={allowClear} css={{ ...paddingStyle, ...css }} onKeyDown={onKeyDown} ref={forwardRef} {...props} />
      </StyledInputContainer>
    );
  }
);
