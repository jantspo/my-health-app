import {mount, shallowMount} from '@vue/test-utils';
import Workout from '../../src/components/Workout';
import Exercise from '../../src/components/Exercise';
describe('Workout', () => {
    const props =  {
        workout: {
            "date": "01/06/2021",
            "userId": 1,
            "uuid": 123123,
            "exercises": [
                {
                    "name": "Push-ups",
                    "calBurned": 20,
                    "totalTime": 15
                }
            ]
        }
    }
    it("Renders a Workout and the associated exercises ", () => {
        const wrapper = mount(Workout, {
            propsData: props
        });
        expect(wrapper.html()).toContain("01/06/2021");
        expect(wrapper.html()).toContain("300");
        expect(wrapper.findComponent(Exercise)).toBeTruthy();
        expect(wrapper.findAllComponents(Exercise).length).toBe(1);
    })

    it("Calculates the total calories burned in a workout ", () => {
        const wrapper = shallowMount(Workout, {
            propsData: props
        });
        expect(wrapper.vm.getTotalCaloriesBurned(wrapper.vm.workout.exercises)).toEqual(300)
    })
})