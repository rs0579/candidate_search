// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    login: string | null;
    avatar_url: string | null;
    username?: string | null;
    location?: string | null;
    html_url: string | null;
    company?: string | null;
}
// export default Candidate;