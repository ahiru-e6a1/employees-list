import Layout from "../components/Layout";
import Image from "next/image";

const Employee = () => {
  return (
    <Layout title="Employee">
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4 pr-10">
          <p className="font-bold">No.1</p>
        </div>
        <div className="flex">
          <div className="mt-2 pr-8">
            <Image
              className="rounded-full"
              src="/cat-1.jpg"
              width={60}
              height={60}
              alt="Avatar"
            />
          </div>
          <div className="mt-4">
            <p className="text-xs mt-2 text-gray-600">enginer</p>
            <p className="font-bold">taro suzuki</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Employee;
