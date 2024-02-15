export default function MainResul({ result }) {
  const resultList = (contents) =>
    contents
      .filter((item) => item.id < 4)
      .map((item, index) => (
        <div
          className="bg-slate-200 w-[220px] h-[150px] my-[20px] rounded-md shadow-md"
          key={index}
        >
          <h1 className="text-lg">{item.name}</h1>
          <h2>{item.content}</h2>
        </div>
      ));

  const list = result.map((item, index) => (
    <>
      <p key={index} className="flex text-[#5A5550]">
        <h1 className="text-[25px]">{item.title}</h1>
        <div className="bg-[#FF9C40] text-white m-[6px] text-center w-[40px] rounded-full">
          {item.contents.length}
        </div>
      </p>
      <hr className="border-[#FF9C40] border-[2px] mt-[10px]"></hr>
      <div className="w-full flex justify-between">
        {item.contents && resultList(item.contents)}
      </div>
    </>
  ));
  return <div className="w-full h-[1700px]">{list}</div>;
}
