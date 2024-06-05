import React, { useState } from 'react';

import {
  Input,
  InputField,
  InputSlot,
  InputIcon,
  CloseIcon,
  SearchIcon,
  Box,
  Text,
} from '@gluestack-ui/themed';
import { FlatList } from 'react-native';
import { useQuery } from 'react-query';

import { api } from '../../../api';

import { City } from './City';
import { Location } from '@components/card/CityCard/types';
import { CircularLoading } from '@components/loading/CircularLoading/CircularLoading';

interface AutoCompleteCitiesProps {
  onSelectLocation: (location: Location) => void;
}

const AutoCompleteCities = (props: AutoCompleteCitiesProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const {
    data = [],
    isFetching,
    isFetched,
  } = useQuery({
    enabled: searchQuery.length > 3,
    queryKey: ['autoCompleteCities', searchQuery],
    queryFn: () => api.getAutoCompleteCities(searchQuery),
  });

  const onChangeSearch = (text: string) => {
    setSearchQuery(text);
  };

  const onSelectLocation = (location: Location) => {
    setIsFocused(false);
    props.onSelectLocation(location);
  };

  return (
    <Box bg="white" flex={1}>
      <Box mb="$2">
        <Input
          variant="outline"
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}>
          <InputField
            testID="search-input"
            onChangeText={onChangeSearch}
            placeholder="Search for a city or postal code"
            onFocus={() => setIsFocused(true)}
            value={searchQuery}
          />
          <InputSlot pr="$3">
            <InputIcon as={SearchIcon} color="$darkBlue500" />
          </InputSlot>
          <InputSlot pr="$3" onPress={() => setSearchQuery('')}>
            <InputIcon as={CloseIcon} color="$darkBlue500" />
          </InputSlot>
        </Input>
      </Box>
      {isFocused && (
        <Box flex={1}>
          <FlatList<Location>
            data={data}
            renderItem={({ item }) => (
              <Box pb="$2" pr="$0.5" pl="$0.5">
                <City location={item} onPress={() => onSelectLocation(item)} />
              </Box>
            )}
            keyExtractor={item => `${item.lat}-${item.lon}`}
            ListHeaderComponent={<CircularLoading isLoading={isFetching} />}
            ListEmptyComponent={
              isFetched ? (
                <Box>
                  <Text>We didn't find any city for this search :(</Text>
                </Box>
              ) : null
            }
          />
        </Box>
      )}
    </Box>
  );
};

export { AutoCompleteCities };
