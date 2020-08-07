import React, { useState, FormEvent } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import styles from './styles';

function Favorites() {
  const [teachers, setTeachers] = useState([]);

  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function handleFiltersSubmit() {
    const response = await api.get('classes',{
      params: {
        subject,
        week_day,
        time
      }
    });
    
    setIsFiltersVisible(!isFiltersVisible);
    setTeachers(response.data);
  }

  function handleToggleFintersVisible(){
    setIsFiltersVisible(!isFiltersVisible);
  }

  return (
    <View style={styles.container}>
      <PageHeader 
        title="Proffys disponíveis" 
        headerRight={(
          <BorderlessButton>
            <Feather name="filter" size={20} color="#FFF" onPress={handleToggleFintersVisible}/>
          </BorderlessButton>
        )}
      >
        { isFiltersVisible && 
          (<View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput 
              style={styles.input}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
              onChangeText={text => setSubject(text)}
            />

          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
              <TextInput 
                style={styles.input}
                placeholder="Qual o dia?"
                placeholderTextColor="#c1bccc"
                onChangeText={text => setWeekDay(text)}
              />
            </View>

            <View style={styles.inputBlock}>
              <Text style={styles.label}>Horário</Text>
              <TextInput 
                style={styles.input}
                placeholder="Qual horário?"
                placeholderTextColor="#c1bccc"
                onChangeText={text => setTime(text)}
              />
            </View>
          </View>

          <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
            <Text style={styles.submitButtonText}>Filtar</Text>
          </RectButton>
        </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem key={teacher.id} teacher={teacher}/>
          )
        })}
      </ScrollView>
    </View>
  );
}

export default Favorites;