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

      const { data: screenHz, error: screenHzError } = await supabase
        .from("distinct_screen_hz")
        .select("screen_hz");
      if (!screenHzError)
        setFilters((prevFilters) => ({
          ...prevFilters,
          screenHz: screenHz.map((item) => item.screen_hz),
        }));

      const { data: screenInch, error: screenInchError } = await supabase
        .from("distinct_screen_inch")
        .select("screen_inch");
      if (!screenInchError)
        setFilters((prevFilters) => ({
          ...prevFilters,
          screenInch: screenInch.map((item) => item.screen_inch),
        }));

      const { data: ramSizes, error: ramSizesError } = await supabase
        .from("distinct_ram_size")
        .select("ram_size");
      if (!ramSizesError)
        setFilters((prevFilters) => ({
          ...prevFilters,
          ramSizes: ramSizes.map((item) => item.ram_size),
        }));

      const { data: storageSizes, error: storageSizesError } = await supabase
        .from("distinct_storage_size")
        .select("storage_size");
      if (!storageSizesError)
        setFilters((prevFilters) => ({
          ...prevFilters,
          storageSizes: storageSizes.map((item) => item.storage_size),
        }));

      const { data: storageTypes, error: storageTypesError } = await supabase
        .from("distinct_storage_type")
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
          .from("distinct_screen_resolution")
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
      // Add more cases for other filter types as needed
      default:
        alert("Unknown filter type: " + filterType);
    }
  };

  return (
    <main>
      <h1 className="font-bold text-2xl">
        this is just a testing ground {keyword}
      </h1>

      <ul>
        <button onClick={fetchLaptops} className="underline">
          FILTER
        </button>
        <li> You are looking for - {keyword} with following filter options:</li>

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
