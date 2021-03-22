import Layout from "../components/Layout";
import Image from "next/image";
import { getAllUsersData } from "../lib/users";

const Employee = ({ users }) => {
  return (
    <Layout title="Employee">
      <div className="md:grid md:grid-cols-2">
        {users &&
          users.map((user) => (
            <div className="bg-white text-center shadow-xl mr-4 ml-4 mt-4 p-8 w-80 rounded border">
              <div className="mt-4 pr-10 ">
                <p className="font-bold">No.{user.id}</p>
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
                  <p className="text-xs mt-2 text-gray-600">{user.username}</p>
                  <p className="font-bold">{user.name}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default Employee;

export async function getStaticProps() {
  const users = await getAllUsersData();
  return {
    props: { users },
  };
}
