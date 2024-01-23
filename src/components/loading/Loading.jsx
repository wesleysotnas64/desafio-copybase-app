import loadingIcon from '../../assets/loading-icon.svg'

import { LoagingIcon, PageContainer } from "./Loading.style";

export function Loading () {

    return (
        
        <PageContainer>
            <LoagingIcon src={loadingIcon} />
        </PageContainer>
        
    );
}