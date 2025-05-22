import "../globals.css";

export default function PolicePage() {
  return (
    <>
      <main className="flex flex-col w-full m-0 p-0 h-full">
        <div className="bg-white text-gray-800 font-sans p-6 h-full">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">
              Privacy Policy for Chicken Game
            </h1>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Effective Date</h2>
              <p>March 02, 2025</p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                1. No Data Collection
              </h2>
              <p className="mb-2">
                We do not collect, store, or process any personal data or
                information from users who play Chicken Game.
              </p>
              <p>
                Our game does not request or require you to provide any personal
                information, such as your name, email address, or location.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                2. No Third-Party Tracking
              </h2>
              <p>
                Chicken Game does not use third-party analytics tools,
                advertisements, or tracking services that collect personal data.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                3. Offline Gameplay
              </h2>
              <p>
                The game can be played entirely offline, and no data is
                transmitted to us or any third parties.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                4. Changes to This Policy
              </h2>
              <p>
                Although Chicken Game does not currently collect data, if this
                changes in the future, we will update this Privacy Policy to
                reflect any new data collection practices. We encourage you to
                review this policy periodically.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2">5. Contact Us</h2>
              <p className="mb-2">
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:marlon_secundo@outlook.com"
                  className="text-blue-600 hover:underline"
                >
                  marlon_secundo@outlook.com
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://marlonsecundo.vercel.app/en"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://marlonsecundo.vercel.app/en
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
