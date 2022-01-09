import {mount} from '@vue/test-utils';
import Workouts from "../../src/components/Workouts";
import Workout from '../../src/components/Workout';
import NewWorkoutForm from '../../src/components/NewWorkoutForm';
describe("Workouts", () => {
    const props =  {
        userId: 1
    }
    let wrapper;

    it("should hide form on initial load and show form when button clicked", async () => {
        wrapper = mount(Workouts, {
            propsData: props
        });
        expect(wrapper.vm.showingForm).toBeFalsy();
        expect(wrapper.findComponent(NewWorkoutForm).exists()).toBe(false);
        wrapper.find('button#workoutFormToggle').trigger("click");
        expect(wrapper.vm.showingForm).toBeTruthy();
        await wrapper.vm.$nextTick();
        expect(wrapper.findComponent(NewWorkoutForm).exists()).toBe(true);
        expect( wrapper.find('button#workoutFormToggle').exists()).toBe(false);
    });

    it("should fetch initial workouts", async ()=>{
      
        const testMethod = jest.spyOn(Workouts.methods, 'getWorkouts');
        wrapper = mount(Workouts, {
            propsData: props
        });
        console.log(wrapper.vm)
        expect(wrapper.vm.workouts.length).toBe(0);
        expect(wrapper.findAllComponents(Workout).length).toEqual(0)
        expect(testMethod).toHaveBeenCalled();
        expect(wrapper.findAllComponents(Workout).length).toEqual(2)
        expect(wrapper.vm.workouts.length).toBe(2);
    })

    // it("should add a workout to workouts array when prompted", async ()=>{
    //     expect(wrapper.workouts.length).toBe(0);
    //     await wrapper.vm.$nextTick();
    //     expect(wrapper.workouts.length).toBe(2);
    //     const formData = [
    //         {
    //             "name": "Push-ups",
    //             "calBurned": 20,
    //             "uuid": 1
    //         },
    //         {
    //             "name": "Squats",
    //             "calBurned": 25,
    //             "uuid": 3
    //         }
    //     ];
    //     wrapper.vm.saveWorkout(formData);
    //     await wrapper.vm.$nextTick();
    //     expect(wrapper.workouts.length).toBe(3);
    // })
})