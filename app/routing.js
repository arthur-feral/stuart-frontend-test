import {
  createUrlContract,
} from 'fetsh';

export const POST_GEOCODE = createUrlContract({
  url: 'https://stuart-frontend-challenge.now.sh/geocode',
});
export const POST_JOBS = createUrlContract({
  url: 'https://stuart-frontend-challenge.now.sh/jobs',
});
