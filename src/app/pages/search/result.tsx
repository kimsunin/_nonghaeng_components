export default function Result({ result }) {
  console.log(result);
  const contents = result.contents;
  const resultList1 = contents
    .filter((item) => item.id % 2 == 0)
    .map((item, index) => (
      <div
        className="bg-slate-200 w-[400px] h-[200px] my-[20px] rounded-md shadow-md flex p-[10px]"
        key={index}
      >
        <div className="bg-slate-400 rounded-md w-[150px]">사진</div>
        <div className="ml-[20px]">
          <h1 className="text-lg">{item.name}</h1>
          <h2>{item.content}</h2>
        </div>
      </div>
    ));

  const resultList2 = contents
    .filter((item) => item.id % 2 !== 0)
    .map((item, index) => (
      <div
        className="bg-slate-200 w-[400px] h-[200px] my-[20px] rounded-md shadow-md flex p-[10px]"
        key={index}
      >
        <div className="bg-slate-400 rounded-md w-[150px]">사진</div>
        <div className="ml-[20px]">
          <h1 className="text-lg">{item.name}</h1>
          <h2>{item.content}</h2>
        </div>
      </div>
    ));
  return (
    <div className="w-full h-[1700px]">
      <p className="flex">
        <h1 className="text-[#5A5550] text-[25px]">{result.title}</h1>
        <div className="bg-[#FF9C40] text-white text-center w-[40px] m-[6px] rounded-full">
          {result.contents.length}
        </div>
      </p>
      <hr className="border-[#FF9C40] border-[2px] mt-[10px]"></hr>
      <div className="w-full flex justify-between">
        <div className=" w-[400px] h-[1631px]">{resultList1}</div>
        <div className=" w-[400px] h-[1631px]">{resultList2}</div>
      </div>
    </div>
  );
}
