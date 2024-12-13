import Form from "next/form";

export default function Home() {
  return (
    <div className="flex flex-col justify-center text-center gap-4">
      <h1 className="text-4xl font-bold">리뷰 카드 생성기</h1>
      <h3 className="text-xl">
        당신이 구매한 상품에 대한 리뷰 카드를 손쉽게 만드세요
      </h3>

      <Form action="">
        <button type="submit">제출</button>
      </Form>
    </div>
  );
}
