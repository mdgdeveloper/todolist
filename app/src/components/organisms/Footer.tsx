import Box from '@material-ui/core/Box';

interface Props {
    
}

const Footer = (props: Props) => {
    return (
        <Box textAlign='center' style={{ marginTop: '50px', paddingBottom: '300px' }} bgcolor='#000000'>
            <Box style={{ paddingTop: '50px' }}>
            <span className="nes-text " style={{ color: 'white'}}>(c) 2021 - MDG Development systems - Version 1.0F </span>
            </Box>
            <Box style={{ paddingTop: '20px' }}>
            
            </Box>
        </Box>
    )
}

export default Footer
