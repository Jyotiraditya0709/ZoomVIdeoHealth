import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import Footer from "~/components/ui/footer";
import Header from "~/components/ui/header";
import { Skeleton } from "~/components/ui/skeleton";
import { api } from "~/utils/api";

const Doctors = () => {
  return (
    <>
      <Header />
      <div className="flex min-h-[80vh] w-screen flex-col items-center overflow-y-scroll bg-gray-100">
        <h1 className="mx-auto mb-2 mt-8 flex w-full max-w-xl self-start text-3xl font-bold leading-none text-gray-700">View all Doctors</h1>
        <div className="flex w-full flex-row flex-wrap justify-center self-center">
          <ViewDoctors />
        </div>
        <Link href="/">
          <Button variant={"link"} className="mx-auto mb-8 flex">
            back
          </Button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

const ViewDoctors = () => {
  const { data, isLoading } = api.user.getDoctors.useQuery();

  return (
    <>
      {isLoading ? (
        <Card className="m-2 flex w-96 flex-col justify-center self-center p-8">
          <Skeleton className="h-8 w-80 animate-pulse" />
          <Skeleton className="my-1 h-4 w-80 animate-pulse" />
          <Skeleton className="h-4 w-80 animate-pulse" />
        </Card>
      ) : (
        <>
          <div className="flex w-full max-w-xl flex-col gap-2">
            {data?.map((doctor) => (
              <Card className="flex w-full flex-row justify-between	p-4" key={doctor.id}>
                <div className="flex flex-row gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
                    <svg className="absolute -left-1 h-12 w-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="flex-flex-col">
                    <p className="text-md font-bold">Dr. {doctor.User?.name}</p>
                    <p className="text-sm text-gray-600">
                      {doctor.department} - {doctor.position}
                    </p>
                  </div>
                </div>
                <Button variant={"outline"} className="flex">
                  Schedule
                </Button>
              </Card>
            ))}
          </div>
        </>
      )}
    </>
  );
};
export { ViewDoctors };
export default Doctors;
