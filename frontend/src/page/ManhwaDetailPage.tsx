import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import DisplayFulInfo from "../feature/manhwa/DisplayFulInfo/DisplayFulInfo";
import { getManhwaDetail } from "../service/getManhwaDetail";
import ContainerPanel from "../ui/ContainerPanel/ContainerPanel";

const ManhwaDetailPage = () => {
    const { source, source_id } = useParams();

    const [loading, setLoading] = useState(true);
    const [manhwa, setManhwa] = useState<any>(null);

    useEffect(()=>{

        if (!source || !source_id) return; 

        const fetchDetail = async () => {
            try {
                const data = await getManhwaDetail(source, source_id);
                setManhwa(data);
            } finally {
                setLoading(false);
            }
        };
        fetchDetail()
    }, [source, source_id]);

    if (loading) return <ContainerPanel variant="secondary"><div>Loading...</div></ContainerPanel>;
    if (!manhwa) return <ContainerPanel variant="secondary"><div>Manhwa not found</div></ContainerPanel>;


    return (
        <>
            <ContainerPanel variant="secondary">
                <DisplayFulInfo manhwaDetails={manhwa}/>
            </ContainerPanel>
        </>
    )
}

export default ManhwaDetailPage;