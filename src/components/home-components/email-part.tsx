const EmailPart = () => {
  return (
    <section>
      <div className="mycon bg-[#E8F1F1] flex justify-center px-[95px] py-[74px] gap-[7px] items-center">
        <h1 className="text-[#183354] text-2xl font-bold max-w-[275px] mr-10">Get Our Latest Gaming
          News & Update</h1>

        <input className="max-w-[300px] px-4 py-3 rounded-md bg-white" type="text" placeholder="Name" />

        <input className="max-w-[300px] px-4 py-3 rounded-md bg-white" type="email" placeholder="E-mail" />

        <button className="bg-[#F4796C] text-white px-4 py-3 rounded-md font-bold font-[Manrope] text-[14px]">Submit Now</button>
      </div>
    </section>
  )
}

export default EmailPart
