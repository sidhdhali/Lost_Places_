import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { createClient } from "contentful";
import { SpinnerDiamond } from "spinners-react";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

const Singleblogone = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    client
      .getEntry(id)
      .then((entry) => {
        setPost(entry.fields);
        setActive(entry.fields.foto1.fields.file.url);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching post", error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-11">
        <SpinnerDiamond
          size={50}
          thickness={100}
          speed={100}
          color="#36ad47"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
        <div className="text-lg font-medium text-gray-500 ml-4">Loading...</div>
      </div>
    );
  }

  const data = post
    ? [
        {
          imgelink: post?.foto1.fields.file.url,
        },
        {
          imgelink: post?.foto2.fields.file.url,
        },
        {
          imgelink: post?.foto3.fields.file.url,
        },
        {
          imgelink: post?.foto4.fields.file.url,
        },
        {
          imgelink: post?.foto5.fields.file.url,
        },
      ]
    : [];

  return (
    <div className=" flex flex-wrap items-center  flex-col   justify-center ">
      <div
        variant="h4"
        color="blue-gray"
        className=" bg-zinc-800 opacity-80 m-16 rounded-xl p-3 font-bold font-serif text-xl  text-[#cbc87a] flex justify-center h-10 items-center mb-4 text-center"
      >
        {post?.titleOfPlace}
      </div>
      <div className="flex justify-center mt-8">
        {active && (
          <img
            className="h-auto flex justify-center w-3/4  max-w-full rounded-lg object-cover object-center md:h-[600px]"
            src={active}
            alt="foto"
          />
        )}
      </div>

      <div className="flex flex-row justify-center max-w mt-10">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            {imgelink && (
              <img
                onClick={() => setActive(imgelink)}
                src={imgelink}
                className="h-20 max-w-full cursor-pointer mx-10 rounded-lg object-cover object-center"
                alt="gallery-image"
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 w-full flex justify-center flex-col items-center bg-zinc-800  text-amber-100 font-serif">
        <p className="text-ll  overflow-visible text-wrap text-left text-ellipsis w-[65rem] max-w-[150rem] mb-10 mt-10 mx-20">
          {post?.singleblog}
        </p>
        <Link
          to={`/`}
          className="flex flex-wrap justify-center my-5  items-center"
        >
          <button className="inline-block rounded-full border-2 border-amber-100 px-6 pb-[6px] pt-2 text-xs font-serif font-medium uppercase leading-normal text-amber-200/90 transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:text-primary-100 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 ">
            HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Singleblogone;
