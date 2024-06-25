import { Link } from "react-router-dom";
import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">開発者向け</h2>
            <p className="mt-2 mb-4">
              Reactの求人情報を閲覧して、今すぐキャリアをスタートしましょう！
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              求人情報を見る{" "}
            </Link>
          </Card>
          <Card bg="bg-indigo-100">
            <h2 className="text-2xl font-bold">雇用主向け</h2>
            <p className="mt-2 mb-4">
              求人情報をリストアップして、その役割に最適な開発者を見つけましょう！{" "}
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              求人を追加{" "}
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HomeCards;
