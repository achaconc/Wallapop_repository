import React from 'react';
import {
  Skeleton,
  Stack, Grid
} from '@mui/material';

const SkeletonCard = (props) => {
  return(
    <Stack spacing={1}><Grid className="main_container" container spacing={2}>
      <Grid className="image_container" item>
          <Skeleton variant="rectangular" width={288} height={288} />
      </Grid>
      <Grid className="sub_conatiner" item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
  <Skeleton variant="text" />
  <Skeleton variant="text" />
  <Skeleton variant="text" />
          </Grid>
        </Grid>
        </Grid>
        <Grid item xs container direction="column" spacing={1}>
        <Grid item>
        <Skeleton width="60%" />
        </Grid>
        <Grid item>
      <Skeleton variant="circular" width={40} height={40} />
        </Grid>
        </Grid>
    </Grid>
    </Stack>
  );
}

export default SkeletonCard;
