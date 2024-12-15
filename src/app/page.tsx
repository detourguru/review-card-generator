import Preview from "@/components/Preview/Preview";

export default function Home() {
  return (
    <div className="flex flex-col justify-center text-center gap-4">
      <h1 className="text-4xl font-bold">리뷰 카드 생성기</h1>
      <h3 className="text-xl">
        당신이 구매한 상품에 대한 리뷰를 손쉽게 카드로 만들어보세요
      </h3>
      <Preview className="flex flex-col gap-4 rounded-3xl p-8 border-primary border-2 shadow-2xl w-2/3 justify-center mx-auto" />
    </div>
  );
}
