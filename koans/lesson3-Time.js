module('Lesson 3 - Time');

/*
 * Step 1: find the 1st method that fails
 * Step 2: Fill in the blank ____ to make it pass
 * Step 3: run it again
 * Note: Do not change anything other than the blank
 */

asyncTest('LaunchingAnActionInTheFuture', function() {
    var received = '';
    var delay = 250/*_______*/;
    Rx
        .Scheduler
        .Immediate
        .Schedule(function() { received = 'Finished'; }, delay);

    setTimeout(function() { equals(received, 'Finished'); start(); }, 500);
});

asyncTest('LaunchingAnEventInTheFuture', function() {
    var received = '',
        time = 250/*_______*/;
        
    Rx
        .Observable
        .Return('Godot', Rx.Scheduler.Immediate)
        .Delay(time)
        .Subscribe(function(x) { received = x; });
    
    setTimeout(function() { equals(received, 'Godot'); start(); }, 500);
});

asyncTest('AWatchedPot', function() {
    var received = '',
        delay = 500,
        timeout = 650/*_______*/,
        timeoutEvent =
            Rx  .Observable
                .Return('Tepid');
        
    Rx
        .Observable
        .Return('Boiling')
        .Delay(delay)
        .Timeout(timeout, timeoutEvent)
        .Subscribe(function(x) { received = x; });
    
    setTimeout(function() { equals(received, 'Boiling'); start(); }, 500);
});
 
