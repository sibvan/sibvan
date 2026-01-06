import Card from "../ui/Card";
import Button from "../ui/Button";
import clsx from "clsx";

type ProjectsProps = {
  projectsList: {
    _id: string;
    title: string;
    description: string;
    url: {
      _target: string;
      _url: string;
    };
    video: {
      href: string;
    };
  }[];
};

const ProjectsSection = (props: ProjectsProps) => {
  const { projectsList } = props;
  console.log(projectsList);

  return (
    <section className="cards-gap grid md:grid-cols-2 xl:grid-cols-3">
      <a
        href="https://github.com/sibvan"
        target="_blank"
        className="group xl:-order-2"
      >
        <Card className="card-default flex aspect-square flex-col justify-between transition-shadow duration-300 ease-in-out group-hover:inset-shadow-[0px_0px_0px_1000px] group-hover:inset-shadow-black group-hover:outline group-hover:-outline-offset-1 group-hover:outline-white/10">
          <h2 className="text-title">Проекты</h2>
          <div className="flex items-end justify-between">
            <p className="text-24 opacity-80">
              Перейти
              <br />
              на GitHub
            </p>
            <Button />
          </div>
        </Card>
      </a>
      {projectsList.map((item, id) => {
        return (
          <a
            className={clsx(
              id === 1 && "md:col-span-2 md:row-span-2 xl:-order-1",
              "group min-w-0",
            )}
            href={item.url._url}
            target={item.url._target}
            key={item._id}
          >
            <Card className="card-default flex aspect-square flex-col gap-6 transition-shadow duration-300 ease-in-out group-hover:inset-shadow-[0px_0px_0px_1000px] group-hover:inset-shadow-black group-hover:outline group-hover:-outline-offset-1 group-hover:outline-white/10">
              <div className="card-url flex justify-end">
                <p className="text-16 w-[calc(100%-80px)] truncate">
                  {item.url._url}
                </p>
              </div>
              <div className="relative flex-1 overflow-hidden rounded-[10px]">
                <div className="bg-grey-100 absolute h-full w-full animate-pulse"></div>
                <video
                  className="relative z-1 h-full w-full object-cover"
                  muted
                  autoPlay
                  loop
                  playsInline
                >
                  <source src={`/cms${item.video.href}`} type="video/mp4" />
                </video>
              </div>

              <div className="flex items-end justify-between">
                <div className="flex-1">
                  <p className="text-24 pb-2 opacity-80">{item.title}</p>
                  <p className="text-16 opacity-50">{item.description}</p>
                </div>
                <Button />
              </div>
            </Card>
          </a>
        );
      })}
    </section>
  );
};

export default ProjectsSection;
