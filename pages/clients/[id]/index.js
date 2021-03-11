import { useRouter } from 'next/router';




function ClientProjectsPage() {
    const router = useRouter();


    function loadProjectHandler() {
        //load data
        // router.push('/clients/nick/projecta');
        router.push({ pathname: '/clients/[id]/[clientprojectid]', query: { id: 'nick', clientprojectid: 'projecta' } });
    }

    return (
        <div>
            <h1>The Client project page</h1>
            <button onClick={loadProjectHandler}>Load project A</button>
        </div>
    )
}
export default ClientProjectsPage;