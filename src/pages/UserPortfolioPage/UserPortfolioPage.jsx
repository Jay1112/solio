// import { useParams } from "react-router-dom";

import StandardTemplate from "../../components/templates/StandardTemplate/StandardTemplate";
import ModernTemplate from "../../components/templates/ModernTemplate/ModernTemplate";

function UserPortfolioPage(){    
    const templateId = 1 ;
    return (
        <>
            { templateId === 1 && <StandardTemplate /> }
            { templateId === 2 && <ModernTemplate /> }
        </>
    );
}

export default UserPortfolioPage;