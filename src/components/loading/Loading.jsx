import loadingIcon from '../../assets/loading-icon.svg'
import PropTypes from 'prop-types';
import { LoagingIcon, PageContainer } from "./Loading.style";

Loading.propTypes = {
    label: PropTypes.string,
};

export function Loading ({ label }) {

    return (
        
        <PageContainer>
            <LoagingIcon src={loadingIcon} />
            <p>{label}</p>
        </PageContainer>
        
    );
    
}

