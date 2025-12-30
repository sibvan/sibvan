import Card from "../ui/Card";

type ExperienceProps = {
  expList: {
    _id: string;
    title: string;
    company: {
      title: string;
      url: {
        _url: string;
        _target: string;
      };
    };
    period: string;
    responsibilities: {
      _id: string;
      description: string;
    }[];
  }[];
};

const Experience = (props: ExperienceProps) => {
  const { expList } = props;
  console.log(expList);

  return (
    <section>
      {expList.map((item) => {
        return (
          <Card key={item._id}>
            <div>
              <h3>{item.title}</h3>
              <div>
                <div>
                  <p>Компания</p>
                  <a
                    target={item.company.url._target}
                    href={item.company.url._url}
                  >
                    {item.company.title}
                  </a>
                </div>
                <div>
                  <p>Период</p>
                  <p>{item.period}</p>
                </div>
              </div>
            </div>
            <div>
              <p></p>
              <ul>
                {item.responsibilities.map((item) => {
                  return <li key={item._id}>{item.description}</li>;
                })}
              </ul>
            </div>
          </Card>
        );
      })}
    </section>
  );
};

export default Experience;
