import AboutUsOfferings from "./AboutUsOfferings";
export default function AboutUs() {
  return (
    <section className="text-white bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">რას გთავაზობთ?</h2>

          <p className="mt-4 text-gray-300">
            კლაპტოპის შემოთავაზებები, და არა მხოლოდ:
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <AboutUsOfferings
            title={"ახალი ლეპტოპები"}
            description={"იე"}
            href={null}
          />
          <AboutUsOfferings
            title={"მეორადი ლეპტოპები"}
            description={"იე"}
            href={null}
          />
          <AboutUsOfferings
            title={"ლეპტოპების დაჯავშნა ლეპტოპები"}
            description={"იე"}
            href={null}
          />
          <AboutUsOfferings
            title={"ლეპტოპის გამოწერა ლეპტოპები"}
            description={"იე"}
            href={null}
          />
          <AboutUsOfferings title={"გარანტია"} description={"იე"} href={null} />
        </div>
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block px-12 py-3 text-sm font-medium text-white transition bg-pink-600 rounded hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            დაგვიკავშირდით
          </a>
        </div>
      </div>
    </section>
  );
}
