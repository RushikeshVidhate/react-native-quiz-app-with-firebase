import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ResultModal = ({
  isModalVisible,
  correctCount,
  incorrectCount,
  totalCount,
  handleOnClose,
  handleRetry,
  handleHome,
}) => {
  return (
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={isModalVisible}
      onRequestClose={handleOnClose}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.black + '90',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: COLORS.white,
            width: '90%',
            borderRadius: 5,
            padding: 40,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 28, color: COLORS.black}}>Results</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{alignItems: 'center', padding: 20}}>
              <Text style={{color: COLORS.success, fontSize: 30}}>
                {correctCount}
              </Text>
              <Text style={{fontSize: 16}}>Correct</Text>
            </View>
            <View style={{alignItems: 'center', padding: 20}}>
              <Text style={{color: COLORS.error, fontSize: 30}}>
                {incorrectCount}
              </Text>
              <Text style={{fontSize: 16}}>Incorrect</Text>
            </View>
          </View>
          <Text style={{opacity: 0.8}}>
            {totalCount - (incorrectCount + correctCount)} Unattempted
          </Text>

          {/* Try agian */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
              width: '100%',
              backgroundColor: COLORS.primary,
              marginTop: 20,
              borderRadius: 50,
            }}
            onPress={handleRetry}>
            <MaterialIcons name="replay" style={{color: COLORS.white}} />
            <Text
              style={{
                textAlign: 'center',
                color: COLORS.white,
                marginLeft: 10,
              }}>
              Try Again
            </Text>
          </TouchableOpacity>
          {/* Go Home */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
              width: '100%',
              backgroundColor: COLORS.primary + '20',
              marginTop: 20,
              borderRadius: 50,
            }}
            onPress={handleHome}>
            <MaterialIcons name="home" style={{color: COLORS.primary}} />
            <Text
              style={{
                textAlign: 'center',
                color: COLORS.primary,
                marginLeft: 10,
              }}>
              Go Home
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ResultModal;
