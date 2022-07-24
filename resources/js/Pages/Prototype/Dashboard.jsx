import Authenticated from "@/Layouts/Authenticated/Index";
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/inertia-react";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard() {
    const flickityOption = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    return (
        <Authenticated>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                {/* Movie Thumbnail */}
                <Flickity className="gap-[30px]" options={flickityOption}>
                    {[1, 2, 3, 4].map((item) => (
                        <FeaturedMovie
                            key={item}
                            slug="the-batman-in-love"
                            name={`the batman in love ${item}`}
                            category="Comedy"
                            thumbnail="https://picsum.photos/id/1/300/300"
                            rating={item + 1}
                        />
                    ))}
                </Flickity>
            </div>
            <div className="mt-12">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity className="gap-[30px]" options={flickityOption}>
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <MovieCard
                            key={item}
                            slug="the-batman-in-love"
                            name={`the batman in love ${item}`}
                            category="Comedy"
                            thumbnail="https://picsum.photos/id/1/300/300"
                        />
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    );
}
