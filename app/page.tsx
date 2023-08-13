import { CustomFilter, Hero, SearchBar } from '@/components'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-contaner">
          <h1 className="text-4xl font-extralight">
            Catalogo de Carros
          </h1>
          <p>
            Explore os carros que você pode gostar
          </p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="combustível" />
            <CustomFilter title="ano" />

          </div>
        </div>
      </div>
    </main>
  )
}
