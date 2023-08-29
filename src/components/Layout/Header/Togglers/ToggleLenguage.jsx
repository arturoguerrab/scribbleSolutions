import React, { useState } from 'react'
import TranslateIcon from '@mui/icons-material/Translate';
import ToggleButton from '@mui/material/ToggleButton';

const ToggleLenguage = () => {
    const [selected, setSelected] = useState(false);

    return (
        <ToggleButton
            size='small'
            value="check"
            selected={selected}
            onChange={() => {
            setSelected(!selected);
            }}
        >
            <TranslateIcon fontSize='small'/>
            {selected==false ?'us':'es'}

        </ToggleButton>
    );
}

export default ToggleLenguage