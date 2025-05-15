import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import { fetchCars } from "@/utils";
import { HomeProps } from "@/Types";
import { cars } from "@/constants/carsDB";

export default async function Home({searchParams} :HomeProps ) {
  // const allCars = await fetchCars({
  //   manufacturer: searchParams.manufacturer || "",
  //   year: searchParams.year || 2022,
  //   fuel: searchParams.fuel || "",
  //   limit: searchParams.limit || 10,
  //   model: searchParams.model || "",
  // });
  const allCars = cars;
  console.log(allCars.length)


  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero/>

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            {/* <CustomFilter title='fuel' />
            <CustomFilter title='year'  /> */}
          </div> 
        </div>

        {!isDataEmpty ? (
          <section>
           <div className='home__cars-wrapper'>
              {allCars?.map((car, i) => {

                return(
                // <CarCard car={car} />
                <div key={i} className="flex">
                  <p>{car.make}</p>
                  <p>{car.model}</p>
                  <img className="w-[170px]" src={car?.image} alt="" />
                </div>
               
              )})}
            </div>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}

      </div>
    </main>
  );
}
// options={fuels} 
// options={yearsOfProduction}
