// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    name: string | null;
    avatar_url: string | null;
    username: string | null;
    location: string | null;
    html_url: string | null;
    company: string | null;
}
export default Candidate;