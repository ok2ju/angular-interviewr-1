export function InterviewResource(Restangular) {
  return {
    postInterview(interview) {
      return Restangular.all('interview').post(interview);
    }
  }
};
