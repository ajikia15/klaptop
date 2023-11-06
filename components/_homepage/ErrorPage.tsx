import "./glitchy.css";
import { errorType } from "./ErrorType";
import { useRouter } from "next/navigation";

export default function ErrorPage({ context }: { context?: errorType }) {
  const router = useRouter();
  const handleKeywordErase = () => {
    router.push(`/search?keyword=`);
  };
  const handleHomeRedirect = () => {
    router.push("/");
  };
  const handleSearchRedirect = () => {
    handleKeywordErase();
  };
  return (
    <section className="w-full flex items-center flex-col h-[40vh] justify-end">
      <div className="glitchy_div text-[128px] " title="404">
        404
      </div>
      <div className="text-2xl font-bold  ">
        {context === errorType.noFavourites && (
          <div>
            ჯერ არ გაქვთ ლეპტოპი შენახული. &nbsp;
            <span
              className="underline cursor-pointer"
              onClick={handleHomeRedirect}
            >
              დაათვალიერეთ&nbsp;
            </span>
            ან&nbsp;
            <span
              className="underline cursor-pointer"
              onClick={handleSearchRedirect}
            >
              მოძებნეთ&nbsp;
            </span>
            , ყველასთვის გვაქვს რაღაცა:)
          </div>
        )}
        {context === errorType.noLaptops && (
          <div>
            ასეთი ლეპტოპი ჯერ არ გვაქვს.&nbsp;
            <span
              className="underline cursor-pointer"
              onClick={handleKeywordErase}
            >
              გაასუფთავე
            </span>
            &nbsp;საძიებო ველი და თავიდან სცადე, გამოგივა:)
          </div>
        )}
        {context === errorType.noPage &&
          "ეს გვერდი არ არსებობს. დაბრუნდით მთავარ გვერდზე"}
      </div>
    </section>
  );
}
