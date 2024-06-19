// import JobTypes from "../constants/valueTypes";
// interface Params {
//     id: string;
// }

export const jobLoader = async ({ params }: { params: object }) => {
    const { id } = params as { id: string };
    const res = await fetch(`/api/jobs/${id}`);
    const data = await res.json();
    return data;
}
