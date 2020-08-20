import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getGuardianList, getGuardianDetails } from "../action";



function SearchGuardian({setGuardianData}) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const data = await getGuardianList()
      if (active) {
        setOptions(data);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleSelect = async (username)=>{
    const data = await getGuardianDetails(username)
    setGuardianData(data)
  }

  return (
    <Autocomplete
      id="g_search"
      style={{ minWidth: 250 }}
      open={open}
      onOpen={() => { setOpen(true); }}
      onClose={() => { setOpen(false); }}
      getOptionLabel={(option) => option.username}
      options={options}
      loading={loading}
      renderOption={(op)=><p onClick={()=>handleSelect(op.username)}>{op.full_name}</p>}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Existing Guardian"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: loading ? <CircularProgress style={{marginRight: -50}} color="inherit" size={20} /> : null
          }}
        />
      )}
    />
  );
}


export { SearchGuardian }