import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	TextField,
	Grid,
	Button,
	Paper,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Checkbox,
	InputLabel
} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
  },
  paper: {
    width: 200,
    height: 230,
    overflow: 'auto',
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
}));

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

const TeacherAcademicInfoForm =({init_data, setNewData})=>{
	const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = (items) => (
    <Paper>
      <List dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );


	const handleChange = (event) => {
		const name = event.target.name;
		setNewData({
			...init_data,
			academic_info:{
				...init_data.academic_info,
				[name]: event.target.value,
			}
		});
	};



	return(
		<form>
			<div className="card px-4 py-3">


				<div className="row m-0">
					<div className="col-sm-8 col-12 p-0">
						<TextField 
							id="degree" 
							label="Degree" 
							type="text"
							value={init_data.academic_info.degree}
							onChange={handleChange}
							className="mb-3"
							fullWidth
							inputProps={{name:'degree'}}
						/>
					</div>
				</div>

				<div className="row m-0">
					<div className="col-12 p-0">
						<TextField 
							id="designation" 
							label="Designation" 
							type="text"
							value={init_data.academic_info.designation}
							onChange={handleChange}
							className="mb-3"
							fullWidth
							inputProps={{name:'designation'}}
						/>
					</div>
				</div>


				<div className="row m-0">
					<div className="col-sm-8 col-12 p-0">
						<TextField
			        id="joined_at"
			        label="Joining date"
			        className="mb-3"
			        fullWidth
			        type="date"
			        defaultValue={init_data.academic_info.joined_at}
			        onChange={handleChange}
			        InputLabelProps={{shrink: true,}}
			        inputProps={{name:'joined_at'}}
			      />
					</div>
				</div>


				<div className="row m-0">
					<InputLabel>Takes</InputLabel>
					<Grid container justify="center" alignItems="center" className={classes.root}>
			      <Grid item>{customList(left)}</Grid>
			      <Grid item>
			        <Grid container direction="column" alignItems="center">
			          <Button
			            variant="outlined"
			            size="small"
			            className={classes.button}
			            onClick={handleAllRight}
			            disabled={left.length === 0}
			            aria-label="move all right"
			          >
			            ≫
			          </Button>
			          <Button
			            variant="outlined"
			            size="small"
			            className={classes.button}
			            onClick={handleCheckedRight}
			            disabled={leftChecked.length === 0}
			            aria-label="move selected right"
			          >
			            &gt;
			          </Button>
			          <Button
			            variant="outlined"
			            size="small"
			            className={classes.button}
			            onClick={handleCheckedLeft}
			            disabled={rightChecked.length === 0}
			            aria-label="move selected left"
			          >
			            &lt;
			          </Button>
			          <Button
			            variant="outlined"
			            size="small"
			            className={classes.button}
			            onClick={handleAllLeft}
			            disabled={right.length === 0}
			            aria-label="move all left"
			          >
			            ≪
			          </Button>
			        </Grid>
			      </Grid>
			      <Grid item>{customList(right)}</Grid>
			    </Grid>
				</div>


			</div>
		</form>
	)
}

export { TeacherAcademicInfoForm };