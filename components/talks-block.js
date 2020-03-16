import React from 'react';
import {Grid} from 'theme-ui';
import { LatestSermonContainerDrupal, RecentSeries, LatestSermon, FeaturedSeries, CurrentSeries, SermonSeriesList } from '@newfrontdoor/sermon'
import seriesSermonList from '@newfrontdoor/sermon/dist/series-sermon-list';

export default function SermonContent() {
  return (
    <Grid gap={20}>
      {/*<LatestSermonContainerDrupal />
    <RecentSeries/>
    <LatestSermon/>
    <FeaturedSeries/>
    <CurrentSeries/>
    <SermonSeriesList/>
    */}</Grid>
  );
}
