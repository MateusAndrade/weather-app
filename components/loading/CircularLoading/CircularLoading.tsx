import React from 'react';

import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

import { Box } from '@gluestack-ui/themed';

interface LoadingProps extends ActivityIndicatorProps {
  isLoading: boolean;
}

const CircularLoading = ({ isLoading, ...props }: LoadingProps) => {
  if (!isLoading) {
    return null;
  }

  return (
    <Box mb="$2" testID="circular-loading">
      <ActivityIndicator {...props} />
    </Box>
  );
};

export { CircularLoading };
