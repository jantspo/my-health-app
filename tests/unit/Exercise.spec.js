import {mount} from '@vue/test-utils';
import Exercise from '../../src/components/Exercise';
describe('Exercise', () => {
    const props = {
        name: "Leg Press",
        calBurned: 10,
        totalTime: 10
    };
    it("displays an the exercise's information", () => {
   
        const wrapper = mount(Exercise, {
            propsData: props
        });
        expect(wrapper.text()).toContain('Leg Press');
        expect(wrapper.text()).toContain(10);
        expect(wrapper.text()).toContain(10);
    })
    it("displays an the exercise's calories burned x total time", () => {
        const wrapper = mount(Exercise, {
            propsData: props
        });
        expect(wrapper.text()).toContain(100);
    })
})