import React from 'react';
import { View, Text } from 'react-native';
import { soft, hard } from '../Data';
import Appstyles from './styles.scss';

export default function Skills() {
  return(
    <View style={ Appstyles.container }>
      <View style={ Appstyles.contTitle }>
        <Text style={ Appstyles.title }>Minhas Skills</Text>
      </View>
      <View style={ Appstyles.contSoft }>
        <Text style={ Appstyles.softTitle}>Soft Skills</Text>
        <View>
          { soft.map((skills, index) =>
              <Text
                key={ index }
                style={ Appstyles.softText }
              >
                { skills }
              </Text>
          )}
        </View>
      </View>
      <View style={ Appstyles.contHard }>
        <Text style={ Appstyles.hardTitle}>Hard Skills</Text>
        <View>
        { hard.map((skills, index) =>
              <Text
                key={ index }
                style={ Appstyles.hardText }
              >
                { skills }
              </Text>
        )} 
        </View>
      </View>
    </View>
  );
}