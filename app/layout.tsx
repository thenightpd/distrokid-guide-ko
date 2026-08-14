import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "디스트로키드 음원 등록 가이드 | 처음부터 발매까지",
  description: "DistroKid가 무엇인지부터 준비물, 실제 음원 등록 순서, 정산과 저작권까지 쉽게 정리한 초보자 가이드입니다.",
  openGraph: {
    title: "디스트로키드로 음원 발매하기",
    description: "처음 발매하는 사람도 따라 할 수 있는 DistroKid 음원 등록 가이드",
    type: "article",
    locale: "ko_KR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
