export default async function SpecsTable({ laptop }: any) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-gray-400">
              სპეციფიკაციები
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600">
            <th
              scope="row"
              className="flex flex-row items-center px-6 py-4 font-medium whitespace-nowrap"
            >
              <div className="pr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                >
                  <g fill="currentColor">
                    <path d="M4 8a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Zm7.5-1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z" />
                    <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5Zm5.5 4a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5ZM9 8a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0Z" />
                    <path d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5v-1Zm4 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Z" />
                  </g>
                </svg>
              </div>
              ვიდეო ბარათი (GPU)
            </th>
            <td className="px-6 py-4 text-white">
              {laptop.gpu[1] === "T" ? "Nvidia" : "Radeon"}{" "}
              {laptop.gpu.toUpperCase()}
            </td>
          </tr>
          <tr className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600">
            <th
              scope="row"
              className="flex flex-row items-center px-6 py-4 font-medium whitespace-nowrap"
            >
              <div className="pr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                >
                  <g fill="currentColor">
                    <path d="M14 6H6v8h8V6Z" />
                    <path
                      fill-rule="evenodd"
                      d="M9.25 3V1.75a.75.75 0 0 1 1.5 0V3h1.5V1.75a.75.75 0 0 1 1.5 0V3h.5A2.75 2.75 0 0 1 17 5.75v.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v.5A2.75 2.75 0 0 1 14.25 17h-.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-.5A2.75 2.75 0 0 1 3 14.25v-.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-.5A2.75 2.75 0 0 1 5.75 3h.5V1.75a.75.75 0 0 1 1.5 0V3h1.5ZM4.5 5.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5Z"
                      clip-rule="evenodd"
                    />
                  </g>
                </svg>
              </div>
              პროცესორი (CPU)
            </th>
            <td className="px-6 py-4 text-white">
              {laptop.cpu_is_intel ? "Intel Core i" : "Ryzen "}
              {laptop.cpu_num}
              {laptop.cpu_is_intel ? "-" : " "}
              {laptop.cpu_model}
            </td>
          </tr>
          <tr className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600">
            <th
              scope="row"
              className="flex flex-row items-center px-6 py-4 font-medium whitespace-nowrap"
            >
              <div className="pr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M640 130.94V96c0-17.67-14.33-32-32-32H32C14.33 64 0 78.33 0 96v34.94c18.6 6.61 32 24.19 32 45.06s-13.4 38.45-32 45.06V320h640v-98.94c-18.6-6.61-32-24.19-32-45.06s13.4-38.45 32-45.06zM224 256h-64V128h64v128zm128 0h-64V128h64v128zm128 0h-64V128h64v128zM0 448h64v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h128v-26.67c0-8.84 7.16-16 16-16s16 7.16 16 16V448h64v-96H0v96z"
                  />
                </svg>
              </div>
              ოპერატიული მეხსიერება (RAM)
            </th>
            <td className="px-6 py-4 text-white">{laptop.ram_size}GB</td>
          </tr>
          <tr className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600">
            <th
              scope="row"
              className="flex flex-row items-center px-6 py-4 font-medium whitespace-nowrap"
            >
              <div className="pr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="currentColor">
                    <path d="M18.842 13.376c1.126 0 2.14.453 2.891 1.181l-2.365-9.379C18.842 3.545 17.9 3 16.737 3H7.263C6.1 3 5.158 3.545 4.632 5.178l-2.365 9.38a4.135 4.135 0 0 1 2.89-1.182h13.685Z" />
                    <path
                      fill-rule="evenodd"
                      d="M5.158 14.405c-1.167 0-2.2.663-2.75 1.674A3.393 3.393 0 0 0 2 17.702C2 19.553 3.442 21 5.158 21h13.684C20.558 21 22 19.552 22 17.703c0-.593-.15-1.146-.409-1.624c-.549-1.01-1.582-1.674-2.749-1.674H5.158ZM11.21 17.4a.78.78 0 0 0-.789-.771a.78.78 0 0 0-.79.771v1.029a.78.78 0 0 0 .79.771a.78.78 0 0 0 .79-.771V17.4Zm1.843-.771a.78.78 0 0 1 .79.771v1.029a.78.78 0 0 1-.79.771a.78.78 0 0 1-.79-.771V17.4a.78.78 0 0 1 .79-.771Zm3.42.771a.78.78 0 0 0-.789-.771a.78.78 0 0 0-.79.771v1.029a.78.78 0 0 0 .79.771a.78.78 0 0 0 .79-.771V17.4Zm2.632 0a.78.78 0 0 0-.79-.771a.78.78 0 0 0-.789.771v1.029a.78.78 0 0 0 .79.771a.78.78 0 0 0 .79-.771V17.4Z"
                      clip-rule="evenodd"
                    />
                  </g>
                </svg>
              </div>
              მეხსიერება
            </th>
            <td className="px-6 py-4 text-white">{laptop.storage_size}</td>
          </tr>
          <tr className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600">
            <th
              scope="row"
              className="flex flex-row items-center px-6 py-4 font-medium whitespace-nowrap"
            >
              <div className="pr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m6 2a6 6 0 0 0-6 6c0 3.31 2.69 6 6.1 6l-.88-2.23a1.01 1.01 0 0 1 .37-1.37l.86-.5a1.01 1.01 0 0 1 1.37.37l1.92 2.42A5.977 5.977 0 0 0 18 10a6 6 0 0 0-6-6m0 5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-5 9a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m5.09-4.73l2.49 6.31l2.59-1.5l-4.22-5.31l-.86.5Z"
                  />
                </svg>
              </div>
              მეხსიერების ტიპი
            </th>
            <td className="px-6 py-4 text-white">{laptop.storage_type}</td>
          </tr>
          <tr className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600">
            <th
              scope="row"
              className="flex flex-row items-center px-6 py-4 font-medium whitespace-nowrap"
            >
              <div className="pr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M11 17H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2ZM4 5h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              ეკრანის ზომა
            </th>
            <td className="px-6 py-4 text-white">
              {laptop.screen_inch} inches
            </td>
          </tr>
          <tr className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600">
            <th
              scope="row"
              className="flex flex-row items-center px-6 py-4 font-medium whitespace-nowrap"
            >
              <div className="pr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18 4h2c1.1 0 2 .9 2 2v2c0 .55-.45 1-1 1s-1-.45-1-1V6h-2c-.55 0-1-.45-1-1s.45-1 1-1zM4 8V6h2c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1s1-.45 1-1zm16 8v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c1.1 0 2-.9 2-2v-2c0-.55-.45-1-1-1s-1 .45-1 1zM6 18H4v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 1.1.9 2 2 2h2c.55 0 1-.45 1-1s-.45-1-1-1zM16 8H8c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2z"
                  />
                </svg>
              </div>
              ეკრანის რეზოლუცია
            </th>
            <td className="px-6 py-4 text-white">
              {laptop.resolution_px} ({laptop.screen_resolution})
            </td>
          </tr>
          <tr className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600">
            <th
              scope="row"
              className="flex flex-row items-center px-6 py-4 font-medium whitespace-nowrap"
            >
              <div className="pr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                    <path
                      fill="currentColor"
                      d="M8.084 2.6c.162-.365.523-.6.923-.6h7.977c.75 0 1.239.79.903 1.462L15.618 8h3.358c.9 0 1.35 1.088.714 1.724L7.737 21.677c-.754.754-2.01-.022-1.672-1.033L8.613 13H5.015a1.01 1.01 0 0 1-.923-1.42L8.084 2.6Z"
                    />
                  </g>
                </svg>
              </div>
              ეკრანის სიხშირე
            </th>
            <td className="px-6 py-4 text-white">{laptop.screen_hz}hz</td>
          </tr>
          {laptop.original_box && (
            <tr className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600">
              <th
                scope="row"
                className="flex flex-row items-center px-6 py-4 font-medium whitespace-nowrap"
              >
                <div className="pr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m17.578 4.432l-2-1.05C13.822 2.461 12.944 2 12 2s-1.822.46-3.578 1.382l-.321.169l8.923 5.099l4.016-2.01c-.646-.732-1.688-1.279-3.462-2.21Zm4.17 3.532l-3.998 2V13a.75.75 0 0 1-1.5 0v-2.287l-3.5 1.75v9.441c.718-.179 1.535-.607 2.828-1.286l2-1.05c2.151-1.129 3.227-1.693 3.825-2.708c.597-1.014.597-2.277.597-4.8v-.117c0-1.893 0-3.076-.252-3.978ZM11.25 21.904v-9.44l-8.998-4.5C2 8.866 2 10.05 2 11.941v.117c0 2.525 0 3.788.597 4.802c.598 1.015 1.674 1.58 3.825 2.709l2 1.049c1.293.679 2.11 1.107 2.828 1.286ZM2.96 6.641l9.04 4.52l3.411-1.705l-8.886-5.078l-.103.054c-1.773.93-2.816 1.477-3.462 2.21Z"
                    />
                  </svg>
                </div>
                ყუთი
              </th>
              <td className="px-6 py-4 text-white">
                {laptop.original_box ? "მოყვება" : "არ მოყვება"}
              </td>
            </tr>
          )}

          <tr className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600">
            <th
              scope="row"
              className="flex flex-row items-center px-6 py-4 font-medium whitespace-nowrap"
            >
              <div className="pr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M11 17H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2ZM4 5h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              ვიდეო ბარათის მეხიერება (vram)
            </th>
            <td className="px-6 py-4 text-white">{laptop.vram}</td>
          </tr>
          {laptop.visual_condition >= 7 && (
            <tr className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600">
              <th
                scope="row"
                className="flex flex-row items-center px-6 py-4 font-medium whitespace-nowrap"
              >
                <div className="pr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M10 6q-.825 0-1.413-.588T8 4q0-.825.588-1.413T10 2q.825 0 1.413.588T12 4q0 .825-.588 1.413T10 6Zm6.5 12q1.05 0 1.775-.725T19 15.5q0-1.05-.725-1.775T16.5 13q-1.05 0-1.775.725T14 15.5q0 1.05.725 1.775T16.5 18Zm2.4 1.3q-.55.35-1.15.525T16.5 20q-1.875 0-3.188-1.313T12 15.5q0-1.875 1.313-3.188T16.5 11q1.875 0 3.188 1.313T21 15.5q0 .65-.175 1.25T20.3 17.9l2 2q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-2-2Zm-7.9-.325q.375.6.887 1.1t1.113.9V21q0 .425-.288.713T12 22q-.425 0-.713-.288T11 21v-2.025ZM9 16v5q0 .425-.288.713T8 22q-.425 0-.713-.288T7 21V9q-1.25-.1-2.475-.275t-2.45-.45q-.425-.1-.688-.475T1.25 7q.125-.425.513-.625t.812-.1Q4.4 6.7 6.263 6.85T10 7q1.875 0 3.738-.15t3.687-.575q.425-.1.813.1T18.75 7q.125.425-.138.8t-.687.475q-1.225.275-2.45.45T13 9v1.025q-1.35.875-2.175 2.313T10 15.5v.25q0 .125.025.25H9Z"
                    />
                  </svg>
                </div>
                ვიზუალური მდგომარეობა
              </th>
              <td className="px-6 py-4 text-white">
                {laptop.visual_condition}/10
              </td>
            </tr>
          )}
          {laptop.working_condition >= 8 && (
            <tr className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600">
              <th
                scope="row"
                className="flex flex-row items-center px-6 py-4 font-medium whitespace-nowrap"
              >
                <div className="pr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M232 96a72 72 0 0 1-100.94 66L79 222.22c-.12.14-.26.29-.39.42a32 32 0 0 1-45.26-45.26c.14-.13.28-.27.43-.39L94 124.94a72.07 72.07 0 0 1 83.54-98.78a8 8 0 0 1 3.93 13.19L144 80l5.66 26.35L176 112l40.65-37.52a8 8 0 0 1 13.19 3.93A72.6 72.6 0 0 1 232 96Z"
                    />
                  </svg>
                </div>
                მუშა მდგომარეობა
              </th>
              <td className="px-6 py-4 text-white">
                {laptop.working_condition}/10
              </td>
            </tr>
          )}
          <tr className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600">
            <th
              scope="row"
              className="flex flex-row items-center px-6 py-4 font-medium whitespace-nowrap"
            >
              <div className="pr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-96 152a8 8 0 0 1-16 0v-51.06l-4.42 2.22a8 8 0 0 1-7.16-14.32l16-8A8 8 0 0 1 112 120Zm56-8a8 8 0 0 1 0 16h-32a8 8 0 0 1-6.4-12.8l28.78-38.37a8 8 0 1 0-13.31-8.83a8 8 0 1 1-13.85-8A24 24 0 0 1 176 136a23.76 23.76 0 0 1-4.84 14.45L152 176ZM48 80V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32Z"
                  />
                </svg>
              </div>
              გამოცემის წელი
            </th>
            <td className="px-6 py-4 text-white">{laptop.release_year}</td>
          </tr>
          {laptop.keyboard_type !== null && (
            <tr className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600">
              <th
                scope="row"
                className="flex flex-row items-center px-6 py-4 font-medium whitespace-nowrap"
              >
                <div className="pr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M4 19q-.825 0-1.413-.588T2 17V7q0-.825.588-1.413T4 5h16q.825 0 1.413.588T22 7v10q0 .825-.588 1.413T20 19H4Zm4-3h8v-2H8v2Zm-3-3h2v-2H5v2Zm3 0h2v-2H8v2Zm3 0h2v-2h-2v2Zm3 0h2v-2h-2v2Zm3 0h2v-2h-2v2ZM5 10h2V8H5v2Zm3 0h2V8H8v2Zm3 0h2V8h-2v2Zm3 0h2V8h-2v2Zm3 0h2V8h-2v2Z"
                    />
                  </svg>
                </div>
                კლავიატურის განათება
              </th>
              <td className="px-6 py-4 text-white">
                {laptop.keyboard_type === "rgb" ? "RGB" : "თეთრი განათება"}
              </td>
            </tr>
          )}
          {laptop.additional !== null && (
            <tr className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600">
              <th
                scope="row"
                className="flex flex-row items-center px-6 py-4 font-medium whitespace-nowrap"
              >
                <div className="pr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M126.42 24C70.73 24.85 25.21 70.09 24 125.81a103.53 103.53 0 0 0 13.52 53.54a4 4 0 0 0 7.1-.3a119.35 119.35 0 0 0 11.37-51A71.77 71.77 0 0 1 83 71.83a8 8 0 1 1 9.86 12.61A55.82 55.82 0 0 0 72 128.07a135.28 135.28 0 0 1-18.45 68.35a4 4 0 0 0 .61 4.85c2 2 4.09 4 6.25 5.82a4 4 0 0 0 6-1A151.18 151.18 0 0 0 85 158.49a8 8 0 1 1 15.68 3.19a167.33 167.33 0 0 1-21.07 53.64a4 4 0 0 0 1.6 5.63c2.47 1.25 5 2.41 7.57 3.47a4 4 0 0 0 5-1.61A183 183 0 0 0 120 128.28a8.16 8.16 0 0 1 7.44-8.21a8 8 0 0 1 8.56 8a198.94 198.94 0 0 1-25.21 97.16a4 4 0 0 0 2.95 5.92q4.55.63 9.21.86a4 4 0 0 0 3.67-2.1A214.88 214.88 0 0 0 152 128.8c.05-13.25-10.3-24.49-23.54-24.74A24 24 0 0 0 104 128a8.1 8.1 0 0 1-7.29 8a8 8 0 0 1-8.71-8a40 40 0 0 1 40.42-40c22 .23 39.68 19.17 39.57 41.16a231.37 231.37 0 0 1-20.52 94.57a4 4 0 0 0 4.62 5.51a103.49 103.49 0 0 0 10.26-3a4 4 0 0 0 2.35-2.22a243.76 243.76 0 0 0 11.48-34a8 8 0 1 1 15.5 4q-1.12 4.37-2.4 8.7a4 4 0 0 0 6.46 4.17A104 104 0 0 0 126.42 24ZM198 161.08a8 8 0 0 1-7.92 7a8.39 8.39 0 0 1-1-.06a8 8 0 0 1-6.95-8.93a252.57 252.57 0 0 0 1.92-31a56.08 56.08 0 0 0-56-56a56.78 56.78 0 0 0-7 .43a8 8 0 0 1-2-15.89a72.1 72.1 0 0 1 81 71.49a266.93 266.93 0 0 1-2.05 32.96Z"
                    />
                  </svg>
                </div>
                Face Id ან თითის ანაბეჭდი
              </th>
              <td className="px-6 py-4 text-white">
                {laptop.face_id ? "Face Id" : "თითის ანაბეჭდის სკანერი"}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
