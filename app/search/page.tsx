"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
interface iFilters {
  brands: string[];
  gpus: string[];
  releaseYears: string[];
  screenHzs: string[];
  screenInchs: string[];
  ramSizes: string[];
  storageSizes: string[];
  storageTypes: string[];
  vrams: string[];
  screenResolutions: string[];
}
export default function page() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");
  const [isFiltersLoading, setIsFiltersLoading] = useState(true);
  const [checkedFilters, setCheckedFilters] = useState<iFilters>({
    brands: [],
    gpus: [],
    releaseYears: [],
    screenHzs: [],
    screenInchs: [],
    ramSizes: [],
    storageSizes: [],
    storageTypes: [],
    vrams: [],
    screenResolutions: [],
  });
  const [filters, setFilters] = useState<iFilters>({
    brands: [],
    gpus: [],
    releaseYears: [],
    screenHzs: [],
    screenInchs: [],
    ramSizes: [],
    storageSizes: [],
    storageTypes: [],
    vrams: [],
    screenResolutions: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [laptops, setLaptops] = useState<any>([]);
  const fetchLaptops = async () => {
    let query = supabase.from("laptops").select("id,searchkey,brand,model,gpu");
    if (keyword) {
      query = query.filter("searchkey", "ilike", `%${keyword}%`);
    }
    if (checkedFilters.brands.length !== 0) {
      query = query.filter(
        "brand",
        "in",
        `(${checkedFilters.brands.join(",")})`
      );
    }
    if (checkedFilters.gpus.length !== 0) {
      query = query.filter("gpu", "in", `(${checkedFilters.gpus.join(",")})`);
    }

    if (checkedFilters.releaseYears.length !== 0) {
      query = query.filter(
        "release_year",
        "in",
        `(${checkedFilters.releaseYears.join(",")})`
      );
    }

    if (checkedFilters.screenHzs.length !== 0) {
      query = query.filter(
        "screen_hz",
        "in",
        `(${checkedFilters.screenHzs.join(",")})`
      );
    }
    const { data, error } = await query;
    if (error) {
      console.error("Error fetching laptops:", error);
      setIsLoading(false);
      return;
    }

    setLaptops(data);
    setIsLoading(false);
  };
  useEffect(() => {
    const fetchFilters = async () => {
      const { data: gpus, error: gpusError } = await supabase
        .from("distinct_gpus")
        .select("gpu");
      if (!gpusError)
        setFilters((prevFilters) => ({
          ...prevFilters,
          gpus: gpus.map((item) => item.gpu),
        }));

      const { data: brands, error: brandsError } = await supabase
        .from("distinct_brands")
        .select("brand");
      if (!brandsError)
        setFilters((prevFilters) => ({
          ...prevFilters,
          brands: brands.map((item) => item.brand),
        }));

      const { data: releaseYears, error: releaseYearsError } = await supabase
        .from("distinct_release_years")
        .select("release_year");
      if (!releaseYearsError)
        setFilters((prevFilters) => ({
          ...prevFilters,
          releaseYears: releaseYears.map((item) => item.release_year),
        }));

      const { data: screenHzs, error: screenHzsError } = await supabase
        .from("distinct_screen_hz")
        .select("screen_hz");
      if (!screenHzsError)
        setFilters((prevFilters) => ({
          ...prevFilters,
          screenHzs: screenHzs.map((item) => item.screen_hz),
        }));

      const { data: screenInchs, error: screenInchsError } = await supabase
        .from("distinct_screen_inch")
        .select("screen_inch");
      if (!screenInchsError)
        setFilters((prevFilters) => ({
          ...prevFilters,
          screenInchs: screenInchs.map((item) => item.screen_inch),
        }));

      const { data: ramSizes, error: ramSizesError } = await supabase
        .from("distinct_ram_sizes")
        .select("ram_size");
      if (!ramSizesError)
        setFilters((prevFilters) => ({
          ...prevFilters,
          ramSizes: ramSizes.map((item) => item.ram_size),
        }));

      const { data: storageSizes, error: storageSizesError } = await supabase
        .from("distinct_storage_sizes")
        .select("storage_size");
      if (!storageSizesError)
        setFilters((prevFilters) => ({
          ...prevFilters,
          storageSizes: storageSizes.map((item) => item.storage_size),
        }));

      const { data: storageTypes, error: storageTypesError } = await supabase
        .from("distinct_storage_types")
        .select("storage_type");
      if (!storageTypesError)
        setFilters((prevFilters) => ({
          ...prevFilters,
          storageTypes: storageTypes.map((item) => item.storage_type),
        }));

      const { data: vram, error: vramError } = await supabase
        .from("distinct_vram")
        .select("vram");
      if (!vramError)
        setFilters((prevFilters) => ({
          ...prevFilters,
          vram: vram.map((item) => item.vram),
        }));

      const { data: screenResolutions, error: screenResolutionsError } =
        await supabase
          .from("distinct_screen_resolutions")
          .select("screen_resolution");
      if (!screenResolutionsError)
        setFilters((prevFilters) => ({
          ...prevFilters,
          screenResolutions: screenResolutions.map(
            (item) => item.screen_resolution
          ),
        }));
      setIsFiltersLoading(false);
    };
    fetchFilters();
    fetchLaptops();
  }, [keyword, checkedFilters]);

  const handleBrandCheckboxChange = (selected: string, filterType: string) => {
    switch (filterType) {
      case "brands":
        setCheckedFilters((prevFilters) => {
          const updatedBrands = prevFilters.brands.includes(selected)
            ? prevFilters.brands.filter((item) => item !== selected)
            : [...prevFilters.brands, selected];

          return {
            ...prevFilters,
            brands: updatedBrands,
          };
        });
        break;
      case "gpus":
        setCheckedFilters((prevFilters) => {
          const updatedGpus = prevFilters.gpus.includes(selected)
            ? prevFilters.gpus.filter((item) => item !== selected)
            : [...prevFilters.gpus, selected];

          return {
            ...prevFilters,
            gpus: updatedGpus,
          };
        });
        break;
      case "releaseYears":
        setCheckedFilters((prevFilters) => {
          const updatedReleaseYears = prevFilters.releaseYears.includes(
            selected
          )
            ? prevFilters.releaseYears.filter((year) => year !== selected)
            : [...prevFilters.releaseYears, selected];

          return {
            ...prevFilters,
            releaseYears: updatedReleaseYears,
          };
        });
        break;
      case "screenHzs":
        setCheckedFilters((prevFilters) => {
          const updatedScreenHzs = prevFilters.screenHzs.includes(selected)
            ? prevFilters.screenHzs.filter((screenHz) => screenHz !== selected)
            : [...prevFilters.screenHzs, selected];

          return {
            ...prevFilters,
            screenHzs: updatedScreenHzs,
          };
        });
        break;
      case "screenResolutions":
        setCheckedFilters((prevFilters) => {
          const updatedScreenResolutions =
            prevFilters.screenResolutions.includes(selected)
              ? prevFilters.screenResolutions.filter(
                  (screenResolution) => screenResolution !== selected
                )
              : [...prevFilters.screenResolutions, selected];

          return {
            ...prevFilters,
            screenResolutions: updatedScreenResolutions,
          };
        });
        break;
      case "ramSizes":
        setCheckedFilters((prevFilters) => {
          const updatedRamSizes = prevFilters.ramSizes.includes(selected)
            ? prevFilters.ramSizes.filter((ramSize) => ramSize !== selected)
            : [...prevFilters.ramSizes, selected];

          return {
            ...prevFilters,
            ramSizes: updatedRamSizes,
          };
        });
        break;
      case "storageSizes":
        setCheckedFilters((prevFilters) => {
          const updatedStorageSizes = prevFilters.storageSizes.includes(
            selected
          )
            ? prevFilters.storageSizes.filter(
                (storageSize) => storageSize !== selected
              )
            : [...prevFilters.storageSizes, selected];

          return {
            ...prevFilters,
            storageSizes: updatedStorageSizes,
          };
        });
        break;
      case "storageTypes":
        setCheckedFilters((prevFilters) => {
          const updatedStorageTypes = prevFilters.storageTypes.includes(
            selected
          )
            ? prevFilters.storageTypes.filter(
                (storageType) => storageType !== selected
              )
            : [...prevFilters.storageTypes, selected];

          return {
            ...prevFilters,
            storageTypes: updatedStorageTypes,
          };
        });
        break;
      default:
        alert("Unknown filter type: " + filterType);
    }
  };

  return (
    <main>
      <h1 className="font-bold text-2xl">You are looking for: {keyword}</h1>

      <ul>
        <button onClick={fetchLaptops} className="underline">
          To see more results clear the keyword
        </button>
        <li>Filters</li>
        {isFiltersLoading ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <>
            <li>Brand</li>
            {filters.brands.map((brand) => (
              <li key={brand} className="flex items-center space-x-2">
                <Checkbox
                  id={brand}
                  className="border-text "
                  checked={checkedFilters.brands.includes(brand) || false}
                  onClick={() => handleBrandCheckboxChange(brand, "brands")}
                />
                <label
                  htmlFor={brand}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {brand}
                </label>
              </li>
            ))}
            <li>GPU</li>
            {filters.gpus.map((gpu) => (
              <li key={gpu} className="flex items-center space-x-2">
                <Checkbox
                  id={gpu}
                  className="border-text "
                  checked={checkedFilters.gpus.includes(gpu) || false}
                  onClick={() => handleBrandCheckboxChange(gpu, "gpus")}
                />
                <label
                  htmlFor={gpu}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {gpu}
                </label>
              </li>
            ))}
            <li>Release Year</li>
            {filters.releaseYears.map((releaseYear) => (
              <li key={releaseYear} className="flex items-center space-x-2">
                <Checkbox
                  id={releaseYear}
                  className="border-text "
                  checked={
                    checkedFilters.releaseYears.includes(releaseYear) || false
                  }
                  onClick={() =>
                    handleBrandCheckboxChange(releaseYear, "releaseYears")
                  }
                />
                <label
                  htmlFor={releaseYear}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {releaseYear}
                </label>
              </li>
            ))}
            <li>Storage Size</li>
            {filters.storageSizes.map((storageSize) => (
              <li key={storageSize} className="flex items-center space-x-2">
                <Checkbox
                  id={storageSize}
                  className="border-text "
                  checked={
                    checkedFilters.storageSizes.includes(storageSize) || false
                  }
                  onClick={() =>
                    handleBrandCheckboxChange(storageSize, "storageSizes")
                  }
                />
                <label
                  htmlFor={storageSize}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {storageSize}
                </label>
              </li>
            ))}
            <li>Ram Size</li>
            {filters.ramSizes.map((ramSize) => (
              <li key={ramSize} className="flex items-center space-x-2">
                <Checkbox
                  id={ramSize}
                  className="border-text "
                  checked={checkedFilters.ramSizes.includes(ramSize) || false}
                  onClick={() => handleBrandCheckboxChange(ramSize, "ramSizes")}
                />
                <label
                  htmlFor={ramSize}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {ramSize}GB
                </label>
              </li>
            ))}
            <li>Storage Types</li>
            {filters.storageTypes.map((storageType) => (
              <li key={storageType} className="flex items-center space-x-2">
                <Checkbox
                  id={storageType}
                  className="border-text "
                  checked={
                    checkedFilters.storageTypes.includes(storageType) || false
                  }
                  onClick={() =>
                    handleBrandCheckboxChange(storageType, "storageTypes")
                  }
                />
                <label
                  htmlFor={storageType}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {storageType}
                </label>
              </li>
            ))}
            <li>Screen Size</li>
            {filters.screenInchs.map((screenInch) => (
              <li key={screenInch} className="flex items-center space-x-2">
                <Checkbox
                  id={screenInch}
                  className="border-text "
                  checked={
                    checkedFilters.screenInchs.includes(screenInch) || false
                  }
                  onClick={() =>
                    handleBrandCheckboxChange(screenInch, "screenInchs")
                  }
                />
                <label
                  htmlFor={screenInch}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {screenInch}"
                </label>
              </li>
            ))}
            <li>Screen Refresh Rate</li>
            {filters.screenHzs.map((screenHz) => (
              <li key={screenHz} className="flex items-center space-x-2">
                <Checkbox
                  id={screenHz}
                  className="border-text "
                  checked={checkedFilters.screenHzs.includes(screenHz) || false}
                  onClick={() =>
                    handleBrandCheckboxChange(screenHz, "screenHzs")
                  }
                />
                <label
                  htmlFor={screenHz}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {screenHz}Hz
                </label>
              </li>
            ))}
            <li>Screen Resolution</li>
            {filters.screenResolutions.map((screenResolution) => (
              <li
                key={screenResolution}
                className="flex items-center space-x-2"
              >
                <Checkbox
                  id={screenResolution}
                  className="border-text "
                  checked={
                    checkedFilters.screenResolutions.includes(
                      screenResolution
                    ) || false
                  }
                  onClick={() =>
                    handleBrandCheckboxChange(
                      screenResolution,
                      "screenResolutions"
                    )
                  }
                />
                <label
                  htmlFor={screenResolution}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {screenResolution}
                </label>
              </li>
            ))}
          </>
        )}
      </ul>

      <ul>
        {isLoading ? (
          <p>Loading...</p>
        ) : laptops.length === 0 ? (
          <p>Try again, no results</p>
        ) : (
          <ul>
            {laptops.map((laptop: any) => (
              <li key={laptop.id}>
                <p>
                  {laptop.brand} {laptop.model}
                </p>
              </li>
            ))}
          </ul>
        )}
      </ul>
    </main>
  );
}
